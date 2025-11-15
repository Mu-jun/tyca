import { Link } from 'react-router';
import heroImage from '../../assets/hero_image.jpg';
import Spacing from '../../components/Spacing';
import './index.css';
import vectorStroke from '../../assets/Vector(Stroke).svg';

function Main() {
  return (
    <>
      <div className="main-container">
        <Spacing />

        <div className="container">
          <div className="welcome">
            <h1>TYCA 더청년컨설팅연대</h1>
            <p>the youth consulting alliance</p>
          </div>
        </div>

        <Spacing />

        <div className="container">
          <div className="hero">
            <img src={heroImage} alt="Hero Image" />
          </div>
        </div>

        <Spacing size={120} />

        <div className="content">
          <div className="flex-1">
            <h2>다양한 프로그램들</h2>
            <p>
              한국청년성장컨설팅연구소는 청소년들의 성장과 발전을 촉진하는
              비영리 단체로, 잠재력을 발취하고
              <br />
              성공을 이룰 수 있도록 다양한 프로그램과 서비스를 제공합니다. 함께
              더 나은 청년의 미래를 지원하도록 하겠습니다.
            </p>
          </div>
          <div className="btn-wrap">
            <Link className="btn" to={'/consulting'}>
              모두 보기
            </Link>
          </div>
        </div>

        <Spacing size={55} />

        <div className="container">
          <div className="row">
            <div className="card">
              <h3>01</h3>
              <h4>청년심리상담</h4>
              <p>
                청년의 정서적 안정과 정신건강의 회복을 위해서는 청년심리상담을
                통해 자아회복 탄력성을 키우면서 자존감을 높이고, 자신의 우울함을
                불러오는 심리적 원인이나 상황에 대해 효과적으로 대응할 수 있도록
                합니다.
              </p>
              <Link className="btn icon primary" to={'/consulting'}>
                <img src={vectorStroke} />
              </Link>
            </div>
            <div className="card">
              <h3>02</h3>
              <h4>마음건강회복</h4>
              <p>
                마음건강은 현재의 자기 자신과 내면에 집중함으로써 외부와
                내부로부터 받게 되는 스트레스로 인해 흔들리거나 부정적인 감정에
                빠지지 않도록 내면의 힘을 기르는 데 효과적인 방법입니다.
              </p>
              <Link className="btn icon primary" to={'/consulting'}>
                <img src={vectorStroke} />
              </Link>
            </div>
            <div className="card">
              <h3>03</h3>
              <h4>멘탈강화훈련</h4>
              <p>
                전문성을 갖춘 심리상담사의 도움을 받아 다양한 심리치료기법을
                받게 되면 마음의 여유를 가지게 되어 현재의자기 자신이 가지고
                있는 멘탈을 강화함으로써 치유 효과를 얻을 수 있습니다.
              </p>
              <Link className="btn icon primary" to={'/consulting'}>
                <img src={vectorStroke} />
              </Link>
            </div>
          </div>
        </div>

        <Spacing size={120} />

        <div className="content">
          <div className="flex-1">
            <h2>프로그램 후기</h2>
            <p>수강생들의 생생한 후기를 전달해 드립니다.</p>
          </div>
          <div className="btn-wrap">
            <Link className="btn" to={'/consulting'}>
              모두 보기
            </Link>
          </div>
        </div>

        <Spacing />

        <div className="container chat">
          <div className="chat-bubble left">
            <h4>불안했던 마음이 편안해졌어요...!</h4>
            <Spacing size={35} />
            <p>
              직장을 다니면서 인간관계에 대해서 회의감을 많이 느꼈어요. 힘들어서
              어디에 하소연 하고 싶었는데 마침 기회가 닿아 강사님과 상담을 진행
              하게 되었어요. 제 마음을 진심으로 걱정해주시고 상담해주셔서
              불안했던 마음은 점차 줄어들고 안정감을 되찾았습니다! 강사님의 상담
              덕분에 이제는 사회에서 인간관계 무섭지 않고 불안하지 않게
              되었습니다.
            </p>
          </div>
          <div className="chat-bubble right">
            <h4>불안했던 마음이 편안해졌어요...!</h4>
            <Spacing size={35} />
            <p>
              직장을 다니면서 인간관계에 대해서 회의감을 많이 느꼈어요. 힘들어서
              어디에 하소연 하고 싶었는데 마침 기회가 닿아 강사님과 상담을 진행
              하게 되었어요. 제 마음을 진심으로 걱정해주시고 상담해주셔서
              불안했던 마음은 점차 줄어들고 안정감을 되찾았습니다! 강사님의 상담
              덕분에 이제는 사회에서 인간관계 무섭지 않고 불안하지 않게
              되었습니다.
            </p>
          </div>
          <div className="chat-bubble left">
            <h4>불안했던 마음이 편안해졌어요...!</h4>
            <Spacing size={35} />
            <p>
              직장을 다니면서 인간관계에 대해서 회의감을 많이 느꼈어요. 힘들어서
              어디에 하소연 하고 싶었는데 마침 기회가 닿아 강사님과 상담을 진행
              하게 되었어요. 제 마음을 진심으로 걱정해주시고 상담해주셔서
              불안했던 마음은 점차 줄어들고 안정감을 되찾았습니다! 강사님의 상담
              덕분에 이제는 사회에서 인간관계 무섭지 않고 불안하지 않게
              되었습니다.
            </p>
          </div>
        </div>

        <Spacing />
      </div>
    </>
  );
}

export default Main;
