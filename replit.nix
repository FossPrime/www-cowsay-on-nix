{ pkgs }: {
  deps = with pkgs; [
    cowsay
    chromium
    nodejs_20
    #  nodePackages.typescript-language-server  # Add nodePackages.typescript if not in node_modules
    #  nodePackages.pnpm # Best of YARN 2, but as easy to run as NPM
  ];
}