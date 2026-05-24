/**
 * Sound synthesis utility using the standard Web Audio API.
 * Provides offline-friendly kid game sound cues.
 */

let audioCtx: AudioContext | null = null;

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  return audioCtx;
}

export const soundEffects = {
  playSuccess: () => {
    try {
      const ctx = getAudioContext();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      
      const now = ctx.currentTime;
      // High sweet ding sound
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(880.00, now + 0.15); // A5
      
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(now);
      osc.stop(now + 0.45);
    } catch (e) {
      console.warn('Audio feedback failed or not supported in this frame', e);
    }
  },

  playError: () => {
    try {
      const ctx = getAudioContext();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      
      const now = ctx.currentTime;
      // Low dual-tone buzz sound
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220.00, now); // A3
      osc.frequency.linearRampToValueAtTime(110.00, now + 0.3); // A2
      
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(now);
      osc.stop(now + 0.35);
    } catch (e) {
      console.warn('Audio feedback failed or not supported in this frame', e);
    }
  },

  playWin: () => {
    try {
      const ctx = getAudioContext();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      
      const now = ctx.currentTime;
      // Fun little fanfare
      const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50]; // C major arpeggio
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);
        
        gain.gain.setValueAtTime(0.1, now + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.1 + 0.25);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.3);
      });
    } catch (e) {
      console.warn('Audio feedback failed or not supported in this frame', e);
    }
  },

  playLose: () => {
    try {
      const ctx = getAudioContext();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      
      const now = ctx.currentTime;
      // Sad descending tones
      const notes = [329.63, 293.66, 261.63, 220.00]; // E -> D -> C -> A
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now + idx * 0.15);
        
        gain.gain.setValueAtTime(0.12, now + idx * 0.15);
        gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.15 + 0.3);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(now + idx * 0.15);
        osc.stop(now + idx * 0.15 + 0.35);
      });
    } catch (e) {
      console.warn('Audio feedback failed or not supported in this frame', e);
    }
  },

  speakText: (text: string) => {
    // Disabled as we do not have Kubi's original voice
    console.log('Speech synthesis disabled to preserve character voice authenticity: ', text);
  }
};
