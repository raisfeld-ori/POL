import Link from "next/link";


export default function socials(){
  
  return <div className="container">
    <h1 className="head">About me</h1>
    <div className="descriptions">
    <div className="CV">
      <h1 className="CV-head">CV</h1>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consectetur 
      voluptas quae quasi amet dolorum aliquid minus quaerat error 
      similique dignissimos labore, facere provident iusto illo molestiae natus deleniti soluta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consectetur 
      voluptas quae quasi amet dolorum aliquid minus quaerat error 
      similique dignissimos labore, facere provident iusto illo molestiae natus deleniti soluta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consectetur 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consectetur 
      voluptas quae quasi amet dolorum aliquid minus quaerat error 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consectetur 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consectetur 
      voluptas quae quasi amet dolorum aliquid minus quaerat error 
      </p>
    </div>
    <p className="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consectetur 
      voluptas quae quasi amet dolorum aliquid minus quaerat error 
      similique dignissimos labore, facere provident iusto illo molestiae natus deleniti soluta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consectetur 
      voluptas quae quasi amet dolorum aliquid minus quaerat error 
      similique dignissimos labore, facere provident iusto illo molestiae natus deleniti soluta?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consectetur 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consectetur 
      voluptas quae quasi amet dolorum aliquid minus quaerat error 
    </p>
    </div>
    <ul className="links">
  
      <li className="link">
      <img className="right-side small" src="https://i.imgur.com/XHupYIb.jpg"/>
        <Link href={"#"}>LinkedIn</Link>
      </li>
      <li className="link"><Link href={"#"}>Null</Link></li>
      <li className="link"><Link href={"#"}>Instagram</Link></li>
    </ul>
    </div>
}