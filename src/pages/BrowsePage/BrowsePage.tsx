import browseImage from "../../assets/images/browseImage.png";
import subPhotoBrowse from "../../assets/images/subPhotoBrowse.png";

const BrowsePage = () => {
  return (
    <main className="px-7 py-14 flex flex-col gap-7">
      <h3 className="text-3xl font-semibold">Trending schools</h3>
      <span>Checkout our weekly updated trending schools.</span>
      <section className="flex justify-around gap-4">
        <div className="flex flex-col gap-2">
          <img src={browseImage} alt="trending image" className="w-96" />
          <div className="flex gap-1 w-96 justify-around">
            <img
              src={subPhotoBrowse}
              alt="trending image"
              className="flex-1 w-0"
            />
            <img
              src={subPhotoBrowse}
              alt="trending image"
              className="flex-1 w-0"
            />
            <span className="flex-1 w-0 bg-secondary rounded-3xl flex items-center justify-center text-xl font-semibold">
              1025+
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <img src={browseImage} alt="trending image" className="w-96" />
          <div className="flex gap-1 w-96 justify-around">
            <img
              src={subPhotoBrowse}
              alt="trending image"
              className="flex-1 w-0"
            />
            <img
              src={subPhotoBrowse}
              alt="trending image"
              className="flex-1 w-0"
            />
            <span className="flex-1 w-0 bg-secondary rounded-3xl flex items-center justify-center text-xl font-semibold">
              1025+
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <img src={browseImage} alt="trending image" className="w-96" />
          <div className="flex gap-1 w-96 justify-around">
            <img
              src={subPhotoBrowse}
              alt="trending image"
              className="flex-1 w-0"
            />
            <img
              src={subPhotoBrowse}
              alt="trending image"
              className="flex-1 w-0"
            />
            <span className="flex-1 w-0 bg-secondary rounded-3xl flex items-center justify-center text-xl font-semibold">
              1025+
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <img src={browseImage} alt="trending image" className="w-96" />
          <div className="flex gap-1 w-96 justify-around">
            <img
              src={subPhotoBrowse}
              alt="trending image"
              className="flex-1 w-0"
            />
            <img
              src={subPhotoBrowse}
              alt="trending image"
              className="flex-1 w-0"
            />
            <span className="flex-1 w-0 bg-secondary rounded-3xl flex items-center justify-center text-xl font-semibold">
              1025+
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BrowsePage;
