
const Loader = () => {
  let circleCommonClasses = 'h-8 w-8 bg-cyan-700 rounded-full';
  return (
    <div className='flex justify-center items-center w-full h-[18.75rem]'>
      <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
      <div
        className={`${circleCommonClasses} mr-1 animate-bounce200`}
      ></div>
      <div className={`${circleCommonClasses} animate-bounce400`}></div>
    </div>
  );
}


export default Loader