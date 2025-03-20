import React, { useState, useEffect } from 'react';

function Advert() {
    const [adSize, setAdSize] = useState('300x250');

    const handleSizeChange = (event) => {
        setAdSize(event.target.value);
    };

    const [iframeAdSize, setIframeAdSize] = useState('300x250');

    const handleIframeSizeChange = (event) => {
        setIframeAdSize(event.target.value);
    };

    useEffect(() => {
        const loadAd = (id) => {
            const adContainer = document.getElementById(id);
            adContainer.innerHTML = '';
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = `https://secure.adnxs.com/ttj?id=35405406&size=${adSize}`;
            adContainer.appendChild(script);
        };

        loadAd('ad1');
        loadAd('ad2');
    }, [adSize]);

    return (
        <div>
            <h1>Advert</h1>
            <label htmlFor="ad-size">Select Ad Size: </label>
            <select id="ad-size" value={adSize} onChange={handleSizeChange}>
                <option value="300x250">300x250</option>
                <option value="728x90">728x90</option>
                <option value="160x600">160x600</option>
                <option value="320x50">320x50</option>
            </select>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                <div id="ad1" style={{ border: '1px solid lightgray', width: adSize.split('x')[0] + 'px', height: adSize.split('x')[1] + 'px' }}>
                    {/* Ad Placement 1 */}
                </div>
                <div id="ad2" style={{ border: '1px solid lightgray', width: adSize.split('x')[0] + 'px', height: adSize.split('x')[1] + 'px' }}>
                    {/* Ad Placement 2 */}
                </div>
            </div>

            <h2 style={{ marginTop: '40px' }}>Iframe Ads</h2>
            <label htmlFor="iframe-ad-size">Select Iframe Ad Size: </label>
            <select id="iframe-ad-size" value={iframeAdSize} onChange={handleIframeSizeChange}>
                <option value="300x250">300x250</option>
                <option value="728x90">728x90</option>
                <option value="160x600">160x600</option>
                <option value="320x50">320x50</option>
            </select>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                <iframe
                    src={`https://secure.adnxs.com/ttj?id=35405406&size=${iframeAdSize.split('x')[0]}x${iframeAdSize.split('x')[1]}`}
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    topMargin="0"
                    leftMargin="0"
                    allowTransparency="true"
                    width={iframeAdSize.split('x')[0]}
                    height={iframeAdSize.split('x')[1]}
                    style={{ border: '1px solid lightgray' }}
                ></iframe>
                <iframe
                    src={`https://secure.adnxs.com/ttj?id=35405406&size=${iframeAdSize.split('x')[0]}x${iframeAdSize.split('x')[1]}`}
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    topMargin="0"
                    leftMargin="0"
                    allowTransparency="true"
                    width={iframeAdSize.split('x')[0]}
                    height={iframeAdSize.split('x')[1]}
                    style={{ border: '1px solid lightgray' }}
                ></iframe>
            </div>
        </div>
    );
}

export default Advert;