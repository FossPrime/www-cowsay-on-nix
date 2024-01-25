{ pkgs ? import <nixpkgs> {} }:

let
  replit = import ./replit.nix { inherit pkgs; };
in
  pkgs.mkShell {
    buildInputs = replit.deps;
  }