import img from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Care = () => {
  return (
    <div className='mb-32'>
      <div className="card lg:card-side bg-base-100">
        <figure className=''>
          <img
          className='lg:w-1/2 rounded-xl'
            src={img}
            alt="Movie"
          />
        </figure>
        <div className="card-body lg:w-52">
          <h2 className="card-title font-bold text-5xl mb-5">Exceptional Dental Care, on Your Terms</h2>
          <p className=''>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <div className="card-actions mt-5">
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Care;
