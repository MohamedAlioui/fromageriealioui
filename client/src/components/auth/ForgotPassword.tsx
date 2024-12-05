import React from 'react';
import { Link } from 'react-router-dom';

export function ForgotPassword() {
  return (
    <div className="text-sm">
      <Link
        to="/forgot-password"
        className="font-medium text-emerald-600 hover:text-emerald-500"
      >
        Mot de passe oublié ?
      </Link>
    </div>
  );
}