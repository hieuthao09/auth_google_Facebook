"use client";
import User from '@/app/User'
import React, { useCallback, useState } from 'react'
import {  LoginSocialGoogle,  LoginSocialFacebook,IResolveParams} from 'reactjs-social-login'
import {  FacebookLoginButton,  GoogleLoginButton,} from 'react-social-login-buttons'
const REDIRECT_URI = window.location.href;
//const REDIRECT_URI = 'http://localhost:3000/account/login'
export default function Home () {
  const [provider, setProvider] = useState('');
  const [profile, setProfile] = useState<any>();
  const onLoginStart = useCallback(() => {
    
  }, []);
  const onLogoutSuccess = useCallback(() => {
    setProfile(null)
    setProvider('')
    alert('logout success')
  }, []);
  const onLogout = useCallback(() => {}, []);
  return (
    <>
    {provider && profile ? (
        <User provider={provider} profile={profile} onLogout={onLogoutSuccess} />
      ) : (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={`App ${provider && profile ? 'hide' : ''}`}>
        <h1 className="title">ReactJS Social Login</h1>
        <LoginSocialFacebook
          appId={process.env.FACEBOOK_CLIENT_ID || ''}
          fieldsProfile={
            'id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender'
          }
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          redirect_uri={REDIRECT_URI}
          onResolve={({ provider, data }: IResolveParams) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={err => {
            console.log(err);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>

        <LoginSocialGoogle
          client_id={process.env.GOOGLE_CLIENT_ID || ''}
          onLoginStart={onLoginStart}
          redirect_uri={REDIRECT_URI}
          scope="openid profile email"
          discoveryDocs="claims_supported"
          access_type="offline"
          onResolve={({ provider, data }: IResolveParams) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={err => {
            console.log(err);
          }}
        >
          <GoogleLoginButton />
        </LoginSocialGoogle>
        </div>
    </main>
    )
}
        </>
  )
}