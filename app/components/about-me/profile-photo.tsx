import Image from "next/image";

export default function ProfilePhoto() {
  return (
    <div className='relative w-40 h-40 mx-auto group'>
      <div className='absolute inset-0 rounded-full'>
        <div className='w-full h-full rounded-full bg-white dark:bg-gray-900 p-1'>
          <Image
            src='/profile-photo.jpeg'
            alt='Jorge Rodríguez - Senior Software Engineer'
            fill
            className='rounded-full object-cover transition-transform group-hover:scale-105'
            priority
          />
        </div>
      </div>
    </div>
  );
}
