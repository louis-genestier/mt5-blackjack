import Deck from './deck';

export function Home() {
    return (
      <>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .wrapper {
              height: 100vh;
              width: 100vw;
              position: absolute;
              top: 0;
              left: 0;
              background-color: green;
            }
            `,
          }}
        />
        <div className="wrapper">
            <Deck />
            <Deck />
            <Deck />
        </div>
      </>
    );
  }
  
  export default Home;
  