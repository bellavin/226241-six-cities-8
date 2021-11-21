type Props = {
  data: string[],
}

function OfferDetailGallery({data}:Props): JSX.Element {
  const galleryList = data.length > 6 ? data.slice(0, 6) : data;

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {galleryList.map((item, i) => {
          const key = i;
          return (
            <div key={item + key} className="property__image-wrapper">
              <img className="property__image" src={item} alt="Photo studio" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OfferDetailGallery;
