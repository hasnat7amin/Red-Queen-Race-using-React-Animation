import React, { useRef, useLayoutEffect } from 'react';
import '../styles/Background.css';

function Background ()  {

    const foreground1Animate = useRef(null);
    const foreground2Animate = useRef(null);
    const background1Animate = useRef(null);
    const background2Animate = useRef(null);

    useLayoutEffect(() => {
        var sceneryFrames = [
            { transform: 'translateX(100%)' },
            { transform: 'translateX(-100%)' }
        ];

        var sceneryBackgroundTiming = {
            duration: 36000,
            iterations: Infinity,
            playbackRate: -2
        };

        var sceneryForegroundTiming = {
            duration: 12000,
            iterations: Infinity,
            playbackRate: -2
        };

        var background1Movement = background1Animate.current.animate(sceneryFrames, sceneryBackgroundTiming);
        background1Movement.currentTime = background1Movement.effect.getTiming().duration / 2;

        var background2Movement = background2Animate.current.animate(sceneryFrames, sceneryBackgroundTiming);

        var foreground1Movement = foreground1Animate.current.animate(sceneryFrames, sceneryForegroundTiming);
        foreground1Movement.currentTime = foreground1Movement.effect.getTiming().duration / 2;

        var foreground2Movement = foreground2Animate.current.animate(sceneryFrames, sceneryForegroundTiming);


        var sceneries = [foreground1Movement, foreground2Movement, background1Movement, background2Movement];



        setInterval(function () {
            sceneries.forEach(function (anim) {
                if (anim.playbackRate > 0.4) {
                    anim.playbackRate *= 0.9;
                }
            });
        }, 3000);

        var MoveFast = function () {
            sceneries.forEach(function (anim) {
                anim.playbackRate *= 1.1;
            })
        }

        document.addEventListener('click', MoveFast);


    })


    return (
        <div>
            <div class="scenery" id="foreground1" ref={foreground1Animate}>
                <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" " />
            </div>
            <div class="scenery" id="foreground2" ref={foreground2Animate}>
                <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" " />
                <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" " />
            </div>

            <div class="scenery" id="background1" ref={background1Animate}>
                <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" " />
                <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" " />
                <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" " />
            </div>
            <div class="scenery" id="background2" ref={background2Animate}>
                <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" " />
                <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" " />
                <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" " />
            </div>
        </div>
    )
}

export default Background;