interface Button {
  btnClass?: string;
  title: string;
  onClick?: () => void;
}

interface Progress {
  progress: number;
}

interface GithubAuth {
  clientId: string;
  clientSecret: string;
}