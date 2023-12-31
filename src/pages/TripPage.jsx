import React from 'react';
/*import InitMap from '../components/TripGPX'*/

function Trips() {
    return (
        <>
            <h1 className="tripHeader" style={{padding: 20, textAlign: "center"}}>
                Eurovelo R10 - czyli rowerem wzdłuż polskiego wybrzeża Bałtyku
            </h1>
            <h3 style={{padding: 20, textAlign: "justify"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h3>
            <p style={{padding: 20, textAlign: "justify"}}>
                Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Faucibus purus in massa tempor.
                Interdum posuere lorem ipsum dolor. Eget nunc scelerisque viverra mauris in aliquam sem. Amet purus gravida quis blandit turpis cursus in hac.
                Tristique nulla aliquet enim tortor at auctor urna nunc id. Magna fermentum iaculis eu non diam phasellus vestibulum lorem.
                Volutpat consequat mauris nunc congue nisi vitae suscipit. Leo vel fringilla est ullamcorper eget nulla facilisi. Eu scelerisque felis imperdiet proin.
                Malesuada fames ac turpis egestas maecenas pharetra convallis. Feugiat nisl pretium fusce id velit. Et netus et malesuada fames ac. Morbi enim nunc faucibus a pellentesque sit.
                Eget aliquet nibh praesent tristique magna sit. Adipiscing bibendum est ultricies integer quis. Bibendum enim facilisis gravida neque convallis a cras semper auctor.
                Cum sociis natoque penatibus et magnis dis. In nibh mauris cursus mattis molestie a iaculis at. Lacus viverra vitae congue eu consequat ac felis.
            </p>

            {/*<div id="map" style={{ height: '500px', border: "solid" }}>
                <InitMap/>
            </div>*/}

            <div style={{ margin: '0 auto' }}>
                <iframe
                    loading="lazy"
                    width="100%"
                    height="680"
                    src="https://velomapa.pl/widzety/d4c41c0c-03bb-4d7e-82bc-e3bf35538af2"
                    frameBorder="0"
                    style={{ margin: '0 auto', border: '1px solid #ddd' }}
                />
                <a
                    target="_blank"
                    href="https://velomapa.pl/szlaki/velo-baltica-eurovelo-10-13-r10?utm_source=widget&amp;utm_medium=widget&amp;utm_campaign=route_widget"
                    rel="dofollow"
                    style={{
                        fontFamily: 'Roboto, Helvetica, sans-serif',
                        margin: '0',
                        fontSize: '12px',
                        textAlign: 'end',
                        paddingTop: '4px',
                        color: 'rgb(55, 65, 81)',
                        display: 'block',
                        fontWeight: 'normal',
                        textDecoration: 'none'
                    }}
                >
                    Pobierz gpx i zobacz więcej na velomapa.pl
                </a>
            </div>
        </>
    )
}

export default Trips