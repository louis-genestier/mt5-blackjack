import Card from './card';

export function Deck() {
    return (
      <>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .deck_container {
              display: flex;
              justify-content: center;
              align-items: center;
              outline: 1px solid red;
            }
            `,
          }}
        />
        <div className="deck_container">
            <Card color="trefle" number={"k"} />
            <Card color="carreau" number={"8"} />
        </div>
      </>
    );
  }
  
  export default Deck;
  