export default function Dock() {
  return (
    <div className='absolute bottom-0 flex gap-5 px-4 py-3 mx-auto my-5 -translate-x-1/2 bg-neutral-600 w-max rounded-3xl left-1/2'>
      {[...Array(5).fill(0)].map((el, idx) => (
        <div
          className='w-10 h-10 bg-gray-300 rounded-full cursor-pointer'
          key={idx}
        ></div>
      ))}
    </div>
  );
}
