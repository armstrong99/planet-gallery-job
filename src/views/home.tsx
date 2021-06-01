import css from '../styles/Home.module.scss'
import Header from '../components/header'
import Description from '../components/description'
import MainBody from '../components/mainbody'
import Projects from '../components/projects'
import Team from '../containers/Team'
import Footer from '../components/footer'


export interface HomeProps {
    
}
 
const Home: React.FC<HomeProps> = () => {

    interface ImainBody {
        title: string,
        content: string,
        imgAlt: string,
        imgUrl: string
      }

    const mainBody: ImainBody[] = [
        {
        title: "About Us",
        content: "Qoretek specializes in software development projects. Founded in 2020, Qoretek is fast growing in the market as a supplier of innovative solution, adding business value through technological implementation at a professional level. We deliver products and services with quantifiable return investment built around customers goal and strategic vision. With a talented and highly proven track record of delivering high quality and timely services.",
        imgAlt: "Qoretek specializes in software development projects",
        imgUrl: "https://www.bestvalueschools.com/app/uploads/2020/07/GettyImages-1187635221.jpg"
       },
        {
        title: "What we do",
        content: "Web development, Mobile development, IT Consultancy, Design, Training on modern/required technology, Business branding.",
        imgAlt: "Web development, Mobile development, IT Consultancy, Design, Training on modern/required technology, Business branding.",
        imgUrl: "https://www.careercast.com/sites/default/files/2018-02/application-developer.jpg"
       }
    ]
    return (  
        <>
     <div className={css.container}>
     <Header/>
     <Description />
     </div>
     <main className="md:h-auto">
     {mainBody.map((val, k) => <MainBody {...val} key={k} index={k}/>)}
     <Projects />
     <hr />
      <Team />
      </main>
      <Footer />
    </>


     );
}
 
export default Home;