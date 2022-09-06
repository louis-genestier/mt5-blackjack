import Card from './card';

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
              display: flex;
              justify-content: space-around;
              align-items: center;
            }
            `,
          }}
        />
        <div className="wrapper">
            <Card color="trefle" number={5} />
            <Card color="carreau" number={8} />
            <Card color="pique" number={3} />
            <Card color="coeur" number={7} />
        </div>
      </>
    );
  }
  
  export default Home;
  