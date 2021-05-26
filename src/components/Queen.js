import React, { useRef, useLayoutEffect } from 'react'
import '../styles/Queen.css';
import '@wellyshen/use-web-animations';

function Queen() {
    const aliceSprite = useRef(null);

    useLayoutEffect(() => {



        var alice = aliceSprite.current.animate(
            [
                { transform: 'translateY(0)' },
                { transform: 'translateY(-100%)' }
            ]
            , {
                easing: 'steps(7, end)',
                direction: "reverse",
                duration: 500,
                playbackRate: 1,
                iterations: Infinity
            });


        setInterval(function () {
            if (alice.playbackRate > .4) {
                alice.playbackRate -= .1;
            }
        }, 3000);

        const moveFast = () => {
            alice.playbackRate += 0.1;
        }

        window.addEventListener("click", moveFast);


    })
    return (
        <div >
            <div className="earth">
                <div className="alice">
                    <img className="alicesprite" ref={aliceSprite}
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x" alt="Alice" />
                </div>
            </div>
        </div>
    )
}

export default Queen
