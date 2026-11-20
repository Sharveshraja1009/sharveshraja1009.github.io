import React from 'react';
import profileImage from '../assets/profile.jpeg';

// Photo card: shown in the About section on desktop and in the hero on phones.
const ProfileCard = () => (
  <div className="glass-morphism p-8 rounded-2xl">
    <div className="w-48 h-48 mx-auto mb-1 rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink p-1">
      <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
        <img src={profileImage} alt="Sharvesh R." className="w-full h-full object-contain" />
      </div>
    </div>

    <div className="text-center">
      <h4 className="text-xl font-bold mb-2">Sharvesh R.</h4>
      <p className="text-neon-cyan mb-4">Full-Stack Developer · Legends Tech Solution</p>
      <p className="text-sm text-muted-foreground">"Talk is cheap, show me your code"</p>
    </div>
  </div>
);

export default ProfileCard;
