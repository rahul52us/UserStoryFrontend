import React, { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';

const App: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const studentVideoRef = useRef<HTMLVideoElement>(null);

  const socketRef = useRef<Socket | null>(null);
  const [isTeacher, setIsTeacher] = useState(false);

  useEffect(() => {
    socketRef.current = io('http://localhost:8080');

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);

  const handleJoinAsStudent = () => {
    if (socketRef.current) {
      socketRef.current.emit('joinAsStudent',123456);
    }
  };

  const handleJoinAsTeacher = () => {
    if (socketRef.current) {
      socketRef.current.emit('joinAsTeacher',123456);
      setIsTeacher(true);
    }
  };

  function serializeStream(stream: MediaStream): any {
    const tracks = stream.getTracks().map((track) => ({
      id: track.id,
      kind: track.kind,
      label: track.label,
      enabled: track.enabled,
      muted: track.muted,
      readyState: track.readyState,
      settings: track.getSettings(),
    }));

    return {
      id: stream.id,
      active: stream.active,
      tracks,
    };
  }



  useEffect(() => {
    if(isTeacher)
    {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }

        if (socketRef.current) {
          const serializedStream = serializeStream(stream);
          // Emit the teacher stream to the server
          socketRef.current.emit('teacherStream', {stream : serializedStream , roomId : 123456});
        }
      })
      .catch((error) => {
        console.error('Error accessing media devices:', error);
      });
    }

    if(socketRef)
    {
      socketRef?.current?.on('getTeacherStream', ({ stream }) => {
        const videoElement: HTMLVideoElement = document.getElementById('Studentvideo') as HTMLVideoElement;
        console.log(videoElement)
        if (videoElement && videoElement.srcObject) {
          const mediaStream = videoElement.srcObject as MediaStream;
          const tracks = stream.tracks.map((track: any) => {
            const mediaStreamTrack = mediaStream.getTracks().find((t) => t.id === track.id);

            if (mediaStreamTrack) {
              Object.assign(mediaStreamTrack, track);
              return mediaStreamTrack;
            }
            return null;
          });

          const filteredTracks = tracks.filter(Boolean);
          const newMediaStream = new MediaStream(filteredTracks);
          videoElement.srcObject = newMediaStream;

          console.log('The student stream is', newMediaStream);
        }
      });

    }
  })

  useEffect(() => {
    if (socketRef.current) {
      // Event handler for receiving the teacher stream
      socketRef.current.on('teacherStream', (stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      });

      // Event handler for receiving notification about a new teacher stream
      socketRef.current.on('newTeacherStream', (stream) => {
        console.log('New teacher stream available');
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      });

      // Event handler for receiving notification about the teacher stream ending
      socketRef.current.on('teacherStreamEnded', () => {
        console.log('Teacher stream ended');
        if (studentVideoRef.current) {
          studentVideoRef.current.srcObject = null;
        }
      });
    }
  }, []);

  useEffect(() => {
    if(socketRef)
    {
      socketRef?.current?.on('studentJoined',(message) => {
        console.log('the student has been joined', message)
      })
    }
  })

  return (
    <div>
      {isTeacher ? (
        <div>
          <h2>Teacher</h2>
          <video ref={videoRef} autoPlay />
        </div>
      ) : (
        <div>
          <h2>Student</h2>
          <button onClick={handleJoinAsStudent}>Join as Student</button>
        </div>
      )}
      {!isTeacher && (
        <div>
          <button onClick={handleJoinAsTeacher}>Join as Teacher</button>
        </div>
      )}
      <h1>student Video</h1>
      <video id="Studentvideo"  autoPlay />
    </div>
  );
};

export default App;
