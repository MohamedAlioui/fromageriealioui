import React from 'react';
import { Button } from '../ui/Button';
import { Github, Facebook, Mail } from 'lucide-react';

export function SocialAuth() {
  return (
    <div className="mt-6 grid grid-cols-3 gap-3">
      <Button
        type="button"
        variant="secondary"
        className="w-full flex justify-center items-center"
        onClick={() => console.log('Google login')}
      >
        <Mail className="h-5 w-5" />
      </Button>

      <Button
        type="button"
        variant="secondary"
        className="w-full flex justify-center items-center"
        onClick={() => console.log('Facebook login')}
      >
        <Facebook className="h-5 w-5" />
      </Button>

      <Button
        type="button"
        variant="secondary"
        className="w-full flex justify-center items-center"
        onClick={() => console.log('Github login')}
      >
        <Github className="h-5 w-5" />
      </Button>
    </div>
  );
}