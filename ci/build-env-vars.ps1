#!/usr/bin/env pwsh

$directory = "./config"

Get-ChildItem $directory |
Foreach-Object {
    $content = (Get-Content $_.FullName -Raw).Replace('\n',' ').Replace('\r', ' ').Trim()
    $name = [System.Io.Path]::GetFileName($_.FullName).ToUpper().Replace('-','_')
    Set-Item "env:$name" $content
}

Get-ChildItem Env: