import '../styles/Home.module.scss'

export interface MainBodyProps {
    title: string,
    imgAlt: string,
    content: string,
    imgUrl: string,
    index: number
}
 
const MainBody: React.FC<MainBodyProps> = ({title, imgAlt, content, imgUrl, index}) => {
    return ( 
        <>
        <h2 className="text-xl font-bold text-center pt-16 md:height-auto md:hidden">{title}</h2>
    <article className={`'mainBody' ${index % 2 === 0 ? 'md:flex-row-reverse mt-28 items-center' : 'md:flex-row mt-32 items-center'}`} style={index % 2 === 0 ? {'background': '#FCFCFC'} : {} } >
                    <article className="w-1/2">
                    <h2>{title}</h2>
          <p className="text-center p-4 font-normal">{content}</p>
                    </article>
         <img alt={imgAlt} src={imgUrl} className='maiBodyImg' />
    </article>
        </>
     );
}
  
export default MainBody;