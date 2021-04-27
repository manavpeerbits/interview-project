import React, { useState, useEffect } from "react";
import { fs } from '../mocks/fetchBlob';

interface Props {
  content: any;
  screen: 'ClassScreen' | 'MeditationScreen' | 'ArticleScreen' | 'CourseScreen';
}

type ContentStatus = 'online' | 'downloading' | 'offline';
type DownloadProgress = number;

export const DownloadContent: React.FC<Props> = ({ content, screen }) => {
  const [contentStatus, setContentStatus] = useState<ContentStatus>('online');
  const [contentImageDownloadProgress, setcontentImageDownloadProgress] = useState<DownloadProgress>(0);
  const [teacherImageDownloadProgress, setteacherImageDownloadProgress] = useState<DownloadProgress>(0);
  const [additionalMediaDownloadProgress, setadditionalMediaDownloadProgress] = useState<DownloadProgress>(0);
  var request = new XMLHttpRequest();
  const contentKey = screen === 'ClassScreen' ? 'classes' : screen === 'ArticleScreen' ? 'articles' : screen === 'CourseScreen' ? 'courses' : screen === 'MeditationScreen' ? 'meditations' : '';

  useEffect(() => {
      async function checkDownloadStatus() {
        if (await fs.exists(contentKey)) {
            const currentContentArray = await fs.readFile(contentKey);
            const parsedData = JSON.parse(currentContentArray as string);
            const storedData = parsedData.find((doc: any) => doc.id === content.id);
            if (storedData) {
                setContentStatus('offline');
            } else {
                setContentStatus('online');
            }
        }
      }

      checkDownloadStatus();
  }, [content.id, contentKey])

  function updateProgressForContentImage(oEvent: ProgressEvent) {
    if (oEvent.lengthComputable) {
      var progress = oEvent.loaded / oEvent.total;
      setcontentImageDownloadProgress(Math.round(progress * 100));
    } else {
      // Unable to compute progress information since the total size is unknown
    //   setcontentImageDownloadProgress(0);
    }
  }

  function updateProgressForTeacherImage(oEvent: ProgressEvent) {
    if (oEvent.lengthComputable) {
      var progress = oEvent.loaded / oEvent.total;
      setteacherImageDownloadProgress(Math.round(progress * 100));
    } else {
      // Unable to compute progress information since the total size is unknown
    //   setteacherImageDownloadProgress(0);
    }
  }

  function updateProgressForAdditionalMedia(oEvent: ProgressEvent) {
    if (oEvent.lengthComputable) {
      var progress = oEvent.loaded / oEvent.total;
      setadditionalMediaDownloadProgress(Math.round(progress * 100));
    } else {
      // Unable to compute progress information since the total size is unknown
    //   setadditionalMediaDownloadProgress(0);
    }
  }

  function fetchMedia(url: string, progressCallback: any) {
    let fileType: string = 'video/mp4';
    if (url.endsWith('.mp3')) {
        fileType = 'audio/mp3';
    } else if (url.endsWith('.jpg')) {
        fileType = 'image/jpg';
    } else if (url.endsWith('.png')) {
        fileType = 'image/png';
    }

    return new Promise((resolve, reject) => {
        // var oReq = new XMLHttpRequest();
        
        // oReq.addEventListener("progress", progressCallback);
        // oReq.onload = function(e) {
        //     if (this.status === 200) {            
        //       // Create a binary string from the returned data, then encode it as a data URL.
        //     //   var uInt8Array = new Uint8Array(this.response);
        //     //   // Get binary string from UTF-16 code units
        //     //   var bin = String.fromCharCode.apply(null, (uInt8Array as any));
          
        //     //   var base64 = window.btoa(bin);
        //     var reader = new FileReader();
        //     reader.onload = function(event: any) {
        //        var res = event.target.result;
        //        console.log(res)
        //     }
        //       var file = this.response;
        //       const loger = reader.readAsDataURL(file)
        //       console.log('loger', loger)
          
        //     //   console.log("data:"+ fileType +";base64," + base64);
        //     }
        //   };
        // oReq.open('GET', url);
        // oReq.responseType = 'blob';
        // oReq.send();

        // oReq.onreadystatechange = function() {
        //     if (oReq.readyState === XMLHttpRequest.DONE) {
        //         console.log('response', oReq)
        //         setContentStatus('offline');
        //         resolve(oReq.response);
        //     }
        // }

        request.open('GET', url, true);
        request.addEventListener("progress", progressCallback);
        request.responseType = 'blob';
        request.onload = function() {
            var reader = new FileReader();
            reader.readAsDataURL(request.response);
            reader.onload =  function(e: any){
                console.log('DataURL:', e.target.result);
                // setContentStatus('offline');
                resolve({ blob: request.response, base64: e.target.result});
            };
        };
        request.onreadystatechange = function() {
            if (request.readyState === XMLHttpRequest.DONE) {
                console.log('response', request)
                // setContentStatus('offline');
                // resolve(request.response);
            }
        }
        request.send();
    });
  }

  async function setContent(key: string, content: any) {
    if (await fs.exists(key)) {
        const currentContentArray = await fs.readFile(key);
        const parsedData = JSON.parse(currentContentArray as string);
        const index = parsedData.findIndex((doc: any) => doc.id === content.id);
        console.log('\n\n', {
            index,
            parsedData
        })
        if(parsedData.length > 0 && index > 0) {
            parsedData[index] = content;
            fs.writeFile(key, JSON.stringify(parsedData));
        } else {
            parsedData.push(content);
            fs.writeFile(key, JSON.stringify(parsedData));    
        }
    } else {
        const newContentArray = [];
        newContentArray.push(content);
        fs.writeFile(key, JSON.stringify(newContentArray));
    }
  }

  async function unlinkContent(key: string, dataId: string) {
    if(await fs.exists(key)) {
        const currentContentArray = await fs.readFile(key);
        const parsedData = JSON.parse(currentContentArray as string);
        const filteredData = parsedData.filter((doc: any) => doc.id !== dataId);
        fs.writeFile(key, JSON.stringify(filteredData));
    }
  }

  async function handleContentDownload(content: any, contentStatus: ContentStatus) {
    console.log('content',content);
    if(contentStatus === 'online') {
        setContentStatus('downloading');
        const contentImage: any = await fetchMedia(content.no_text_image.processed_url, updateProgressForContentImage);
        const teacherImage: any = await fetchMedia(screen === 'CourseScreen' ? content.teachers[0].image.processed_url : content.teacher.image.processed_url, updateProgressForTeacherImage);
        const additionalMedia: any = content.media_download && await fetchMedia(content.media_download, updateProgressForAdditionalMedia);
        // const data = await fetchMedia('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg', updateProgress);
        let newContent: any = {
            media_download: content.media_download || '',
            teacher: {
                image: {
                    processed_url: (content.teacher && content.teacher.image.processed_url) || ''
                }
            },
            teachers: [{
                image: {
                    processed_url: (content.teachers && content.teachers[0].image.processed_url) || ''
                }
            }],
            no_text_image: {
                processed_url: content.no_text_image.processed_url || ''
            }
        }
        if (screen === 'ClassScreen') {
            // newContent['media_download']  = additionalMedia.base64;
            newContent['teacher']['image']['processed_url'] = teacherImage.base64;
            newContent['no_text_image']['processed_url'] = contentImage.base64;
        } else if (screen === 'ArticleScreen') {
            // newContent['media_download']  = additionalMedia.base64;
            newContent['teacher']['image']['processed_url'] = teacherImage.base64;
            newContent['no_text_image']['processed_url'] = contentImage.base64;
        } else if (screen === 'CourseScreen') {
            newContent.teachers && (newContent['teachers'][0]['image']['processed_url'] = teacherImage.base64);
            newContent['no_text_image']['processed_url'] = contentImage.base64;
        } else if (screen === 'MeditationScreen') {
            newContent['media_download']  = additionalMedia.base64;
            newContent['teacher']['image']['processed_url'] = teacherImage.base64;
            newContent['no_text_image']['processed_url'] = contentImage.base64;
        }
        setContent(contentKey, {...content, ...newContent})
        if(contentImage && teacherImage && (content.media_download && additionalMedia)) {
            setContentStatus('offline');
        } else if (contentImage && teacherImage && (screen === 'CourseScreen')) {
            setContentStatus('offline');
        }
    } else {
        // TODO : Remove content from localstorage & stop XHR request
        unlinkContent(contentKey, content.id);
        setContentStatus('online');
        request.abort();
    }
  }

  return (
    <>
      <button onClick={() => handleContentDownload(content, contentStatus)}>
        {contentStatus === 'online'? "Download" : contentStatus === 'downloading' ? "Cancel" : contentStatus === "offline" ? "Remove Download" : null}
      </button>
      {contentStatus === 'downloading' ? <div>
        <progress value={(contentImageDownloadProgress + teacherImageDownloadProgress + additionalMediaDownloadProgress) / 3} max="100" /> {(contentImageDownloadProgress + teacherImageDownloadProgress + additionalMediaDownloadProgress) / 3}%
      </div> : null}
    </>
  );
};
