# deploy.ps1

# Function to load .env file
function Load-EnvFile {
    param (
        [string]$EnvFilePath = ".env"
    )
    
    if (Test-Path $EnvFilePath) {
        Get-Content $EnvFilePath | ForEach-Object {
            # Skip empty lines and comments
            if ($_ -match '^\s*$' -or $_ -match '^\s*#') {
                return
            }
            
            # Parse key=value pairs
            if ($_ -match '^\s*([^=]+?)\s*=\s*(.+?)\s*$') {
                $key = $matches[1]
                $value = $matches[2]
                
                # Set as environment variable
                [System.Environment]::SetEnvironmentVariable($key, $value, [System.EnvironmentVariableTarget]::Process)
                
                Write-Host "Loaded: $key"
            }
        }
    } else {
        Write-Error ".env file not found at: $EnvFilePath"
        exit 1
    }
}

# Load environment variables from .env file
Load-EnvFile

# Deploy to Cloud Run using environment variables
gcloud run deploy llm-proxy `
  --source . `
  --region us-central1 `
  --allow-unauthenticated `
  --set-env-vars OPENAI_API_KEY=$env:OPENAI_API_KEY `
  --set-env-vars API_KEY=$env:API_KEY `
  --platform managed