
import fs from 'fs/promises';
import path from 'path';
import { FileCode, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default async function CodeViewerPage() {
  const filePathToRead = path.join(process.cwd(), 'src/app/page.tsx');
  const displayPath = 'src/app/page.tsx';
  let codeContent: string | null = null;
  let fileError: string | null = null;

  try {
    codeContent = await fs.readFile(filePathToRead, 'utf-8');
  } catch (error: any) {
    console.error(`Error reading file (${displayPath}):`, error);
    fileError = `Failed to load source code for "${displayPath}". The file might be missing, inaccessible, or an error occurred during reading.`;
  }

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <FileCode className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-primary tracking-tight">
          Code Viewer
        </h1>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
          View the source code of key application files. Currently displaying: {displayPath}.
        </p>
      </div>

      {fileError && (
        <Alert variant="destructive" className="mb-6">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error Loading File</AlertTitle>
          <AlertDescription>{fileError}</AlertDescription>
        </Alert>
      )}

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="font-heading text-xl">Source Code: {displayPath}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-lg max-h-[70vh] overflow-auto border">
            <pre className="whitespace-pre-wrap break-words text-sm text-foreground">
              <code>
                {codeContent !== null ? codeContent : "// Source code could not be loaded."}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
