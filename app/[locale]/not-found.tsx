import Link from "next/link";

export default function NotFound() {
  return (
    <div className='min-h-screen flex items-center justify-center px-4'>
      <div className='text-center'>
        <h2 className='text-2xl font-semibold'>Page not found</h2>
        <p className='mt-2 text-muted-foreground'>
          The requested page could not be found.
        </p>
        <Link href='/' className='mt-4 inline-flex text-primary underline'>
          Go back home
        </Link>
      </div>
    </div>
  );
}
