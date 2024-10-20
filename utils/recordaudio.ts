// utils/recordAudio.ts

export default async function recordAudio(): Promise<Blob> {
    // Request access to the microphone
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  
    // Create a new MediaRecorder instance
    const mediaRecorder = new MediaRecorder(stream);
    const audioChunks: BlobPart[] = [];
  
    // Capture audio chunks as they are recorded
    mediaRecorder.ondataavailable = (event) => {
      audioChunks.push(event.data);
    };
  
    // Return a promise that resolves with the final audio Blob
    return new Promise((resolve) => {
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        resolve(audioBlob);
      };
  
      // Start recording and stop after 5 seconds
      mediaRecorder.start();
      setTimeout(() => mediaRecorder.stop(), 5000); // 5 seconds recording
    });
  }
  