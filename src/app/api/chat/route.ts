import { NextRequest, NextResponse } from 'next/server';

export interface ChatRequest {
  message: string;
  history?: Array<{
    role: 'user' | 'assistant';
    content: string;
  }>;
}

export interface ChatResponse {
  response: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ChatRequest = await request.json();
    const { message, history = [] } = body;

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 },
      );
    }

    const apiToken = process.env.RAG_PUBLIC_API_TOKEN;
    if (!apiToken) {
      console.error('RAG_PUBLIC_API_TOKEN is not configured');
      return NextResponse.json(
        { error: 'Service configuration error' },
        { status: 500 },
      );
    }

    const ragResponse = await fetch(
      `https://rag-server-670104242751.us-central1.run.app/api/query?q=${encodeURIComponent(message)}`,
      {
        method: 'GET',
        headers: {
          'x-api-token': apiToken,
        },
      },
    );

    if (!ragResponse.ok) {
      throw new Error(`RAG API error: ${ragResponse.status}`);
    }

    const ragData = await ragResponse.json();
    const response: ChatResponse = {
      response:
        ragData.result || 'Sorry, I could not find any relevant information',
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 },
    );
  }
}
