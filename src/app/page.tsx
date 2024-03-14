"use client";
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    
    const loadFacebookSDK = () => {
      (window as any).fbAsyncInit = function() {
        if (!(window as any).FB) return; 

        (window as any).FB.init({
          appId: '453384657023001',
          xfbml: true,
          version: 'v19.0'
        });
      };
      
      
      const js = document.createElement('script');
      js.id = 'facebook-jssdk';
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      const fjs = document.getElementsByTagName('script')[0];
      if (fjs && fjs.parentNode) {
        fjs.parentNode.insertBefore(js, fjs);
      }
    };

    loadFacebookSDK();
  }, []);

  const handleFacebookLogin = () => {
    if (!(window as any).FB) return; 

    
    (window as any).FB.login(function(response: any) {
      if (response.authResponse) {
        console.log('Welcome!  Fetching your information.... ');
        
        (window as any).FB.api('/me', { fields: 'name, email' }, function(response: any) {
          console.log(response);
         
        });
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h2>Add Facebook Login to your webpage</h2>
        <p id="profile"></p>
        <button onClick={handleFacebookLogin} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Connect to Facebook</button>
      </div>
    </div>
  );
};