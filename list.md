* initialize
* initialized
* shutdown
* exit
+ window
  * <div style="color: #4c90ff">window/showMessage</div>: ask the client to display a particular message in the UI
  * <div style="color: #4c90ff">window/showMessageRequest</div>: ask for displaying a particular message (& actions)
  * <div style="color: #4c90ff">window/logMessage</div>:  ask the client to log a particular message
* telemetry
  * telemetry/event
+ client
  * <div style="color: #4c90ff">client/registerCapability</div>:
  * <div style="color: #4c90ff">client/unregisterCapability</div>:
+ workspace
  - notify
    * <div style="color: #5cce9f">workspace/didChangeWorkspaceFolders</div>: notify workspace folder configuration changes
    * <div style="color: #5cce9f">workspace/didChangeConfiguration</div>: notify the change of configuration settings
    * ***<div style="color: #5cce9f">workspace/didChangeWatchedFiles</div>***: notify changes to watched files
  - acquire info
    * <div style="color: #4c90ff">workspace/workspaceFolders</div>: fetch the current open list of workspace folders
    * <div style="color: #4c90ff">workspace/configuration</div>: fetch configuration settings
    * <div style="color: #5cce9f">workspace/symbol</div>:list project-wide symbols matching the query string
  - edit
    * <div style="color: #5cce9f">workspace/executeCommand</div>: trigger command execution on the server
    * ***<div style="color: #4c90ff">workspace/applyEdit</div>***: modify resource on the client side
+ textDocument
  - notify
    * <div style="color: #5cce9f">textDocument/didOpen</div>: notify newly opened text documents
    * <div style="color: #5cce9f">textDocument/didChange</div>: notify changed parts of document
    * <div style="color: #5cce9f">textDocument/willSave</div>: notify save before the document is actually saved
    * <div style="color: #5cce9f">textDocument/willSaveWaitUntil</div>: inquire additional edit before save
    * <div style="color: #5cce9f">textDocument/didSave</div>: notify document save
    * <div style="color: #5cce9f">textDocument/didClose</div>: notify document close
    * <div style="color: #4c90ff">textDocument/publishDiagnostics</div>: notify validation results
  - acquire info
    * <div style="color: #5cce9f">textDocument/hover</div>: request hover information at a given text document position
    * <div style="color: #5cce9f">textDocument/signatureHelp</div>: request signature information at a given cursor position
    * <div style="color: #5cce9f">textDocument/definition</div>: resolve the definition location (not document) of a symbol
    * <div style="color: #5cce9f">textDocument/typeDefinition</div>: resolve the type definition location of a symbol
    * <div style="color: #5cce9f">textDocument/implementation</div>: resolve the implementation location of a symbol
    * <div style="color: #5cce9f">textDocument/references</div>: resolve project-wide references for the symbol
    * <div style="color: #5cce9f">textDocument/documentHighlight</div>: resolve a document highlights
    * <div style="color: #5cce9f">textDocument/documentSymbol</div>: request list of all symbols found in a given document
    * <div style="color: #5cce9f">textDocument/documentLink</div>: request the location of links in a document
      + <div style="color: #5cce9f">documentLink/resolve</div>: resolve the target of a given document link
    * <div style="color: #5cce9f">textDocument/documentColor</div>: list all color references found in a given text document
    * <div style="color: #5cce9f">textDocument/foldingRange</div>: reqest all folding ranges found in a given text document
  - acquire info & edit
    * <div style="color: #5cce9f">textDocument/colorPresentation</div>: obtain color presentations for at a given location
    * ***<div style="color: #5cce9f">textDocument/completion</div>***: request completion items, which can include textEdit
      + <div style="color: #5cce9f">completionItem/resolve</div>: request detail of selected incomplete completion item
    * <div style="color: #5cce9f">textDocument/codeAction</div>: request action (command &/or command result) list for range
    * <div style="color: #5cce9f">textDocument/codeLens</div>: compute code lenses (commands) for a given text document
      + <div style="color: #5cce9f">codeLens/resolve</div>: resolve the command for a given code lens item
  - edit
    * ***<div style="color: #5cce9f">textDocument/formatting</div>***: format a whole document (return textEdit list)
    * ***<div style="color: #5cce9f">textDocument/rangeFormatting</div>***: format a given range in a document
    * ***<div style="color: #5cce9f">textDocument/onTypeFormatting</div>***: format parts of the document during typing
    * ***<div style="color: #5cce9f">textDocument/rename</div>***: perform a workspace-wide rename (edit) of a symbol
    * <div style="color: #5cce9f">textDocument/prepareRename</div>: setup and test the validity of a rename operation

one server - one tool  
× share one server between different tools

+ code specify
  * URI
  * Text Documents
  * Position
  * Pange
  * Location
  * TextDocumentIdentifier
    + VersionedTextDocumentIdentifier

* Diagnostic
* Command: title<string>, command<string>, arguments<any>[]

+ documentEdit
  * TextEdit: range and newText
  * TextDocumentEdit
  * File Resource changes
  * WorkspaceEdit

* TextDocumentItem
* TextDocumentPositionParams
* DocumentFilter
* MarkupContent
*
