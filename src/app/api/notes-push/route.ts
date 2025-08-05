import { NextRequest, NextResponse } from 'next/server';

const TRIGGER_PATHS = ['Technical/', 'Gallery/', 'Portfolio/', 'Skills'];

export async function POST(request: NextRequest) {
  if (request.headers.get('Content-Type') === 'application/json') {
    const json = await request.json();
    const commit = json.head_commit;
    const addedFiles = commit.added;
    const removedFiles = commit.removed;
    const modifiedFiles = commit.modified;
    const websiteFiles = [...addedFiles, ...removedFiles, ...modifiedFiles];
    const wechatFiles = [...addedFiles, ...modifiedFiles];

    if (
      websiteFiles.some((file) =>
        TRIGGER_PATHS.some((path) => file.includes(path)),
      )
    ) {
      await fetch(
        `https://api.vercel.com/v1/integrations/deploy/${process.env.VERCEL_DEPLOY_IDENTITY}`,
      );
    }

    if (
      wechatFiles.some((file) =>
        TRIGGER_PATHS.some((path) => file.includes(path)),
      )
    ) {
      // TODO: Trigger wechat build
    }
  }

  return NextResponse.json({ message: 'Accepted' }, { status: 200 });
}
