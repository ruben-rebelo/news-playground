type Article = {
    author: string
    content: string
    description: string
    publishedAt: string
    source: {
        id: string | null
        name: string
    }
    title: string
    url: string
    urlToImage: string | null
}

type Data = {
    articles: Article[]
    status: string
    totalResults: number
}

export type {Article, Data}