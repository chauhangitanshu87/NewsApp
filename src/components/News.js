import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  articles= [
    {
    "source": {
    "id": null,
    "name": "NBCSports.com"
    },
    "author": "Charean Williams",
    "title": "Jordan Love injured in waning seconds of loss to Eagles - NBC Sports",
    "description": "Packers quarterback Jordan Love was injured at the end of Friday night's game in Brazil.",
    "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/jordan-love-injured-in-waning-seconds-of-loss-to-eagles",
    "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/2bb0b4d/2147483647/strip/true/crop/3687x2074+0+384/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F9b%2F37%2F3ac169b745a0bba34e6e8da69eaf%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2170620808",
    "publishedAt": "2024-09-07T04:09:33Z",
    "content": "Packers quarterback Jordan Love was injured at the end of Friday nights game in Brazil.\r\nWith 15 seconds left, Love was trying for a miracle comeback when Eagles rushers Jalen Carter and Josh Sweat c… [+627 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "NPR"
    },
    "author": "",
    "title": "Killed in her pink roller skates, a Palestinian girl’s photo in Gaza goes viral - NPR",
    "description": "The photo of a girl in Gaza killed by an Israeli airstrike while wearing pink roller skates goes viral and draws attention to the plight of children nearly a year into the war.",
    "url": "https://www.npr.org/2024/09/06/nx-s1-5103933/gaza-palestinian-girl-roller-skates-photo",
    "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5184x2916+0+270/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F75%2Fa1%2F7c2955c4454e966e1050790bdbdb%2Fgettyimages-2169569085.jpg",
    "publishedAt": "2024-09-07T02:37:31Z",
    "content": "Countless images of dead and wounded children have been pouring out of the Gaza Strip for nearly a year, laying bare the toll of a war thats killed tens of thousands of people.\r\nThis week, though, on… [+4600 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Jackie Wattles",
    "title": "Live updates: Nasa’s Boeing Starliner capsule is returning from the International Space Station - CNN",
    "description": "After 12 weeks in space, Boeing’s Starliner spacecraft is finally set to return home from the International Space Station. Follow here for the latest.",
    "url": "https://www.cnn.com/science/live-news/nasa-boeing-starliner-capsule-09-06-24/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/ap24192571409453.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2024-09-07T01:44:00Z",
    "content": "The problems that have troubled Starliner are not simple. It is, after all, rocket science. \r\nBut NASA and Boeing have worked for weeks to better understand what went wrong.\r\nFirst during the first l… [+1874 chars]"
    },
    {
    "source": {
    "id": "NKR",
    "name": "Milwaukee Journal Sentinel"
    },
    "author": "Christopher Kuhagen, Emmett Prosser",
    "title": "Live game updates in Brazil: Green Bay Packers 19, Philadelphia Eagles 14, second quarter - Milwaukee Journal Sentinel",
    "description": "The Packers open the 2024 NFL season vs the Eagles in Brazil. Follow here for live game and score updates.",
    "url": "https://www.jsonline.com/story/sports/nfl/packers/2024/09/06/green-bay-packers-vs-philadelphia-eagles-score-live-game-updates-highlights-brazil/75093443007/",
    "urlToImage": "https://www.jsonline.com/gcdn/authoring/images/smg/2024/04/09/USAT/73107802007-1445080538.jpeg?crop=5135,2889,x0,y267&width=3200&height=1801&format=pjpg&auto=webp",
    "publishedAt": "2024-09-07T01:30:00Z",
    "content": "Welcome to the 2024 NFL season, Green Bay Packers fans!\r\nJordan Love and the Packers kick off the season against Jalen Hurts and the Philadelphia Eagles on Friday night in Sao Paulo, Brazil, in a Wee… [+17409 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "STAT"
    },
    "author": "STAT",
    "title": "Missouri resident who had no contact with animals tests positive for bird flu - STAT",
    "description": "The case is the first H5 bird flu infection during this outbreak in a person who didn’t have contact with sick animals",
    "url": "https://www.statnews.com/2024/09/06/missouri-h5-bird-flu-case-no-animal-contacts/",
    "urlToImage": "https://www.statnews.com/wp-content/uploads/2024/07/GettyImages-1387571463-1600x900.jpg",
    "publishedAt": "2024-09-07T01:18:23Z",
    "content": null
    },
    {
    "source": {
    "id": "cbs-news",
    "name": "CBS News"
    },
    "author": "Olivia Rinaldi, Allison Novelo",
    "title": "Cornel West to appear on Virginia presidential ballot - CBS News",
    "description": "Dr. Cornel West and and his running mate, Dr. Melina Abdullah, will also appear on the ballots of the battleground states of Michigan, Wisconsin, North Carolina and Georgia.",
    "url": "https://www.cbsnews.com/news/cornel-west-to-appear-on-virginia-presidential-ballot/",
    "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2024/09/07/e650e039-6a24-4927-bfaf-1d97b57d4df7/thumbnail/1200x630/230f1ce73ffdba5e4ad831646df7695d/gettyimages-2021280066.jpg?v=631cf5f2b4e8db7f9bc428589402864d",
    "publishedAt": "2024-09-07T01:16:53Z",
    "content": "Dr. Cornel West, the independent candidate running in the 2024 presidential election, qualified for the ballot in Virginia's general election, according to a letter sent to West's campaign by the Vir… [+3084 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Variety"
    },
    "author": "Rebecca Rubin",
    "title": "Jennifer Lopez, Matt Damon (but No Ben Affleck) Bring Inspirational Sports Drama ‘Unstoppable’ to Toronto - Variety",
    "description": "Jennifer Lopez and Matt Damon joined the cast of \"Unstoppable\" at the Toronto Film Festival premiere.",
    "url": "https://variety.com/2024/film/news/jennifer-lopez-matt-damon-unstoppable-premiere-toronto-film-festival-1236132988/",
    "urlToImage": "https://variety.com/wp-content/uploads/2024/09/GettyImages-2170590968.jpg?crop=0px%2C121px%2C2805px%2C1577px&resize=1000%2C563",
    "publishedAt": "2024-09-07T01:10:00Z",
    "content": "Jenny from the Block made her way to the Six for the premiere of “Unstoppable,” a heartfelt sports drama that debuted on Friday at the Toronto Film Festival.\r\nJennifer Lopez, who stars as a fiercely … [+2948 chars]"
    },
    {
    "source": {
    "id": "nbc-news",
    "name": "NBC News"
    },
    "author": "Dennis Romero",
    "title": "Man arrested in alleged plan to kill Jewish people in New York around Oct. 7 anniversary - NBC News",
    "description": "A Pakistani citizen residing in Canada faces a federal charge for a plan to attack a New York City Jewish center on or around Oct. 7 in support of the Islamic State group, prosecutors said Friday.",
    "url": "https://www.nbcnews.com/news/us-news/man-arrested-alleged-plan-kill-jewish-people-new-york-oct-7-anniversar-rcna170012",
    "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-07/240713-fbi-ch-1319-b24976.jpg",
    "publishedAt": "2024-09-07T00:39:00Z",
    "content": "A Pakistani citizen residing in Canada faces a federal charge for a plan to attack a New York City Jewish center on or around Oct. 7 in support of the Islamic State group, prosecutors said Friday.\r\nA… [+3723 chars]"
    },
    {
    "source": {
    "id": "the-washington-post",
    "name": "The Washington Post"
    },
    "author": "Philip Bump",
    "title": "Column | Now, Trump says, the photo of him with E. Jean Carroll may be ‘AI’ - The Washington Post",
    "description": "Trump’s scrambling effort to undermine the verdict in his sexual assault trial enters familiar territory.",
    "url": "https://www.washingtonpost.com/politics/2024/09/06/now-trump-says-photo-him-with-e-jean-carroll-is-ai/",
    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/OVYC253ZZXWJY7A6RRLCMCDPDY_size-normalized.jpg&w=1440",
    "publishedAt": "2024-09-07T00:37:32Z",
    "content": "Having first attempted to make his case in a court of law, former president Donald Trump on Friday afternoon turned to the court of public opinion.\r\nEarlier in the day, he had joined his legal team a… [+4548 chars]"
    },
    {
    "source": {
    "id": "cbs-news",
    "name": "CBS News"
    },
    "author": "Kathryn Watson",
    "title": "Dick Cheney says he will vote for Kamala Harris - CBS News",
    "description": "Dick Cheney, a lifelong Republican who served as vice president under former President George W. Bush, says he will not vote for Donald Trump.",
    "url": "https://www.cbsnews.com/news/liz-cheney-dick-cheney-kamala-harris/",
    "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/09/06/1d293cce-387e-4f66-8c92-b7c7ea459112/thumbnail/1200x630g4/977d2d1ef19c232707e300b613224674/gettyimages-1318527542.jpg?v=631cf5f2b4e8db7f9bc428589402864d",
    "publishedAt": "2024-09-07T00:26:57Z",
    "content": "Former Vice President Dick Cheney plans to vote for Vice President Kamala Harris, just like his daughter, former Republican Rep. Liz Cheney. \r\n\"In our nation's 248-year history, there has never been … [+2237 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": null,
    "title": "Cockpit recordings describe ‘a lot of icing’ before plane crashed in Brazil, says early report - CNN",
    "description": "Investigators have released preliminary information on the still-mysterious crash of a Voepass airliner that killed all 62 on board in Brazil this summer.",
    "url": "https://www.cnn.com/2024/09/06/americas/brazil-plane-crash-preliminary-report-intl-latam/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2165614285-copy.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2024-09-06T23:48:00Z",
    "content": "Brazils Center for Research and Prevention of Aeronautical Accidents (Cenipa) said on Friday that a preliminary report into the August crash of a Voepass airliner showed icing detectors had been acti… [+1904 chars]"
    },
    {
    "source": {
    "id": "associated-press",
    "name": "Associated Press"
    },
    "author": "HOWARD FENDRICH",
    "title": "Jannik Sinner reaches the US Open men's final by beating Jack Draper after both need medical help - The Associated Press",
    "description": "Top-ranked Jannik Sinner has finished off a 7-5, 7-6 (3), 6-2 victory over Jack Draper to reach his first final at the U.S. Open and second at a Grand Slam tournament his year. They simultaneously got treatment from trainers on a humid afternoon Friday late i…",
    "url": "https://apnews.com/article/us-open-9-6-2024-men-semifinals-sinner-draper-tiafoe-fritz-b142b422def1c9fae2a6e723d80302fe",
    "urlToImage": "https://dims.apnews.com/dims4/default/40092f7/2147483647/strip/true/crop/6469x3639+0+337/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4f%2F41%2Fa1a14e39c1053b3ad97928effa5b%2Fe249f489a12940ee963c064f98ec883a",
    "publishedAt": "2024-09-06T23:38:00Z",
    "content": "NEW YORK (AP) There they both sat in the second set of their U.S. Open semifinal on a humid afternoon Friday, simultaneously receiving treatment from trainers: Jannik Sinner got his left wrist massag… [+4010 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": "Phil Stewart, Sabine Siebold",
    "title": "Ukraine long-range strikes into Russia won't be a game changer, U.S. says - Reuters",
    "description": "Volodymyr Zelenskiy urged Western allies to ignore Moscow's \"red lines\" and allow Kyiv to use long-range weapons for strikes on Russian territory.",
    "url": "https://www.reuters.com/world/biden-sign-250-million-ukraine-security-assistance-2024-09-06/",
    "urlToImage": "https://www.reuters.com/resizer/v2/LIB36Z3G7BPQNLNE42QUDSERHA.jpg?auth=4c69f2c0cc098f83c358800e1ca5377c67bf91e5fbdf366031b3137c6cca8979&height=1005&width=1920&quality=80&smart=true",
    "publishedAt": "2024-09-06T23:21:00Z",
    "content": null
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": "Luc Cohen",
    "title": "Judge delays Trump hush money sentencing until after election - Reuters",
    "description": "Juan Merchan said he plans to sentence Trump on Nov. 26, unless the case is dismissed before then.",
    "url": "https://www.reuters.com/legal/judge-rule-donald-trumps-bid-delay-hush-money-sentencing-2024-09-06/",
    "urlToImage": "https://www.reuters.com/resizer/v2/CQQWZRYQGBPCLDS3A7FJUFGZHU.jpg?auth=7e42ab3c0a7ed0e0af8f66da493f6dd91fcfb2a43203ea82c482c1a6b6ed8af7&height=1005&width=1920&quality=80&smart=true",
    "publishedAt": "2024-09-06T23:17:00Z",
    "content": null
    },
    {
    "source": {
    "id": "ign",
    "name": "IGN"
    },
    "author": "Chris Coke",
    "title": "Asus ROG Swift OLED PG27AQDP Review - IGN",
    "description": "The Asus ROG Swift PG27AQDP is a fantastic 1440p OLED monitor with a 480Hz refresh rate aimed directly at competitive gamers. It offers top-tier performance and a picture to die for.",
    "url": "https://www.ign.com/articles/asus-rog-swift-oled-pg27aqdp-gaming-monitor-review",
    "urlToImage": "https://assets-prd.ignimgs.com/2024/09/06/astro-1725663518173.jpg?width=1280",
    "publishedAt": "2024-09-06T23:12:55Z",
    "content": "The OLED gaming monitor market has exploded this year with multiple releases seeming to take the flagship throne before quickly being replaced to repeat the cycle again. If you have deep pockets, its… [+13274 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Deadline"
    },
    "author": "Armando Tinoco",
    "title": "‘Love & Marriage: Huntsville’: Keke Jabbar’s Cause Of Death Revealed - Deadline",
    "description": "Keke Jabbar, star of OWN's Love & Marriage: Huntsville, died at the age of 42, and her cause of death has now been revealed.",
    "url": "http://deadline.com/2024/09/love-and-marriage-huntsville-keke-jabbars-cause-of-death-1236080635/",
    "urlToImage": "https://deadline.com/wp-content/uploads/2024/07/keke-jabbar-love-and-marriage-huntsville.jpg?w=1024",
    "publishedAt": "2024-09-06T23:09:00Z",
    "content": "Keke Jabbar, star of OWN‘s Love &amp; Marriage: Huntsville, died at the age of 42, and her cause of death has now been revealed.\r\nAccording to an autopsy report from the Alabama medical examiner, Jab… [+1497 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "SpaceNews"
    },
    "author": "Jeff Foust",
    "title": "NASA removes ESCAPADE from inaugural New Glenn launch - SpaceNews",
    "description": "NASA has decided not to launch a Mars mission on the first flight of Blue Origin’s New Glenn in October, concluding that the rocket may not be ready then.",
    "url": "https://spacenews.com/nasa-removes-escapade-from-inaugural-new-glenn-launch/",
    "urlToImage": "https://spacenews.com/wp-content/uploads/2022/11/Screenshot-2022-11-19-at-5.22.41-AM.png",
    "publishedAt": "2024-09-06T23:02:09Z",
    "content": "WASHINGTON NASA has decided not to launch a pair of Mars-bound smallsats on the first flight of Blue Origins New Glenn in October out of concerns that the rocket may not be ready in time.\r\nNASA annou… [+3388 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Space.com"
    },
    "author": "Keith Cooper",
    "title": "Mars leaks faster when closer to the sun - Space.com",
    "description": "Mars has lost enough water to space to form a global ocean up to hundreds of kilometers deep.",
    "url": "https://www.space.com/mars-water-leaking-sun",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/TbPsrybDo9jnjqM8K4vS84-1200-80.jpg",
    "publishedAt": "2024-09-06T23:00:01Z",
    "content": "Seasonal changes can have a dramatic effect on how quickly Mars\r\n loses its water to space, a joint study between the Hubble Space Telescope\r\n and NASA's Mars Atmosphere and Volatile Evolution (MAVEN… [+6087 chars]"
    },
    {
    "source": {
    "id": "usa-today",
    "name": "USA Today"
    },
    "author": "Gabriel Jackson",
    "title": "Hunter Woodhall wins Paralympic gold, celebrates with Olympic gold medalist wife - USA TODAY",
    "description": "Three-time Paralympian Hunter Woodhall and his wife, Olympian Tara Davis-Woodhall, credit each other and their relationship with gold medal success.",
    "url": "https://www.usatoday.com/story/sports/olympics/2024/09/06/hunter-woodhall-wife-tara-davis-woodhall-gold-medal-paralympics/75108444007/",
    "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/09/06/USAT/75106541007-20240906-t-184246-z-109265587-up-1-ek-961-dvwag-rtrmadp-3-paralympics-2024-athletics.JPG?crop=2039,1147,x0,y82&width=2039&height=1147&format=pjpg&auto=webp",
    "publishedAt": "2024-09-06T22:48:40Z",
    "content": "SAINT-DENIS, France Hunter Woodhall leaned forward, eyes fixed on the finish line at Stade de France. \r\nIt wasnt just another race. This was the culmination of years of relentless training, a moment … [+5974 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Holly Yan, Adrienne Vogt, Elise Hammond",
    "title": "Live updates: The latest on the Georgia school shooting - CNN",
    "description": "The teen suspected in the deadly mass shooting at a Georgia high school and his father had initial hearings in court Friday morning. Follow for live news updates.",
    "url": "https://www.cnn.com/us/live-news/georgia-shooting-apalachee-high-school-09-06-24/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2024-09-05t001431z-911042030-rc20u9a6uuvu-rtrmadp-3-georgia-shooting.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2024-09-06T22:38:00Z",
    "content": "The Georgia Bureau of Investigation identified those killed in the Apalachee High School shooting as Richard Aspinwall, 39; Cristina Irimie, 53; and Mason Schermerhorn and Christian Angulo, both 14.\r… [+1955 chars]"
    }
    ]

  constructor(){
    super();
    this.state={
      articles:this.articles,
      loading:false
     
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h3>NewsApp - Top Headlines</h3>
        <div className='row'>
          {this.state.articles.map((element)=> {
            return  <div className='col-md-4' key={element.url}>
            <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} ImageUrl={element.urlToImage}
            newsUrl={element.url}/>
            </div>

          }




          )
        }
         

          {/* <div className='col-md-4'>
          <NewsItem title="mytitle" description="mydesc"/>
          </div>

          <div className='col-md-4'>
          <NewsItem title="mytitle" description="mydesc"/>
          </div> */}

        

        </div>
               
              
      </div>
    )
  }
}

export default News
