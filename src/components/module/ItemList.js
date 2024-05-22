function ItemList({ data }) {
  return (
    <div>
      {data.length ? (
        <ul className="pr-5 mb-12">
          {data.map((amenity, index) => (
            <li className="marker:text-[#304ffe]" key={index}>
              {amenity}
            </li>
          ))}
        </ul>
      ) : (
        <p>هیچ موردی ذکر نشده است</p>
      )}
    </div>
  );
}

export default ItemList;
