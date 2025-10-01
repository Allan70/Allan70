export default function Header(props : {HeadShot: string}) {
  return (
    <div className="port-header">
    <div className="header-hello">
      <div className="hello-txt">Hi, I am Allan ⚡.</div>
    </div>
    <div className="header-img" style={{
      backgroundImage: `url(${props.HeadShot})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'contain',
      backgroundSize: 'cover'
      }}>
      {/* <img src={HeadShot} alt="A picture of Allan" className="head-shot"/> */}
    </div>
  </div>
  )
}
