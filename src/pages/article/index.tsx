import Image from 'next/image';
import {format} from 'date-fns';
import {useRouter} from 'next/router';

export default function Home() {
    const router = useRouter();

    const {
        query: {publishedAt, title, author, content, urlToImage}
    } = router

    return (
        <div className="grid items-start gap-6 lg:grid-cols-2 xl:gap-8">
            <article className="prose prose-gray max-w-none space-y-4 dark:prose-invert">
                <div className="space-y-2 not-prose">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">{title}</h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Posted on {format(new Date(publishedAt as string), 'PPP')} by {author}
                    </p>
                </div>
                <p>{content}</p>
            </article>
            <Image
                alt="Image"
                className="aspect-image overflow-hidden rounded-lg object-cover"
                height={340}
                src={urlToImage !== null ? urlToImage as string : '/placeholder.jpeg'}
                width={600}
            />
        </div>
    );
}
