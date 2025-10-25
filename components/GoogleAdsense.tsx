
import React, { useEffect } from 'react';

interface GoogleAdsenseProps {
  slot: string;
  client: string;
  format?: 'auto' | 'fluid' | string; // 'auto' is common, 'fluid' for responsive, or specific sizes.
  responsive?: 'true' | 'false';
  className?: string;
  style?: React.CSSProperties;
}

const GoogleAdsense: React.FC<GoogleAdsenseProps> = ({
  slot,
  client,
  format = 'auto',
  responsive = 'true',
  className = '',
  style = {},
}) => {
  useEffect(() => {
    // Check if the global 'adsbygoogle' array exists, and push a command to load the ad.
    // This is how Google AdSense scripts typically initialize ad units.
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('Adsense script not loaded or error initializing ad:', e);
      // Optionally, render a fallback or a message to the user
    }
  }, []);

  return (
    <div className={`my-8 flex justify-center ${className}`} style={style}>
      {/*
        This is the Google AdSense ad unit.
        The `data-ad-client` and `data-ad-slot` attributes
        must match your AdSense account details.
        The `style` attribute `display: block` is often crucial for 'auto' format ads
        to render correctly.
      */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', height: '280px' }} /* Example fixed height for better layout control, or set 'auto' */
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      ></ins>
    </div>
  );
};

export default GoogleAdsense;
