export default function SectionSkeleton() {
  return (
    <div className='animate-pulse'>
      <div className='h-8 bg-gray-200 rounded w-1/3 mx-auto mb-8'></div>
      <div className='space-y-4'>
        <div className='h-4 bg-gray-200 rounded w-3/4'></div>
        <div className='h-4 bg-gray-200 rounded w-1/2'></div>
        <div className='h-4 bg-gray-200 rounded w-2/3'></div>
      </div>
    </div>
  );
}
