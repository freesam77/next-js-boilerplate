'use client';

import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Type definition for Post
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// Example API function
const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export function QueryExample() {
  const { data: posts, isLoading, error, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Loading Posts...</CardTitle>
          <CardDescription>Fetching data with TanStack Query</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Error Loading Posts</CardTitle>
          <CardDescription>Something went wrong</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-red-600 mb-4">Error: {error.message}</p>
          <Button onClick={() => refetch()}>Retry</Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Posts from API</CardTitle>
        <CardDescription>Data fetched with TanStack Query</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {posts?.map((post: Post) => (
            <div key={post.id} className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{post.body}</p>
            </div>
          ))}
          <Button onClick={() => refetch()} variant="outline" className="w-full">
            Refresh Data
          </Button>
        </div>
      </CardContent>
    </Card>
  );
} 