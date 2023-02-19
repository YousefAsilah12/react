import { useRef } from "react";






export const VideoPlayer = () => {
  const vidRef = useRef(null);
  console.log("startRef",vidRef);
  
  function pauseHandler() {
    vidRef.current.pause();
    console.log("pause",vidRef);

  }
  function playHandle() {
    vidRef.current.play();
    console.log("play",vidRef);

  }
  return (
    <div  style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <video  ref={vidRef} src="https://rr3---sn-p5qs7nzy.googlevideo.com/videoplayback?expire=1676817414&ei=pt_xY_Rkh9bzBKfep7gF&ip=3.94.122.141&id=o-ADT7uBgl1ohAiNVK5uNWAYZxDtQ27JFg4o024NARU_wW&itag=18&source=youtube&requiressl=yes&mh=Hu&mm=31%2C26&mn=sn-p5qs7nzy%2Csn-vgqsrnl6&ms=au%2Conr&mv=m&mvi=3&pl=15&initcwndbps=1278750&spc=H3gIhi66qAzpSJBq9HyWL7aYALLokT0&vprv=1&svpuc=1&mime=video%2Fmp4&gir=yes&clen=28557341&ratebypass=yes&dur=387.773&lmt=1671234437559017&mt=1676795340&fvip=5&fexp=24007246&c=ANDROID&txp=5538434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAKQYFd1cH7x4htEelI_yvCiTTy4Zk1lCZNAgls5jTBRyAiEA5gx7LaEnCNGbnoN2bMW9eHUmAKSKrNAhloSkIXNWcN0%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAJ5T6cw7Pgo64aZkM3dYNgMWuw7pK1HH7sAJmgTEySrdAiBIGLyZXlV57jCFwCF90kXHrGimvn204tgIzgAqyqxJmA%3D%3D&title=Dire%20Straits%20-%20Brothers%20In%20Arms%20-%20Acoustic%20Guitar%20Cover%20by%20Kfir%20Ochaion%20-%20Emerald%20Guitars">
      </video>
      <button onClick={playHandle}>Play</button>
      <button onClick={pauseHandler}>pause</button>
    </div>
  )
}