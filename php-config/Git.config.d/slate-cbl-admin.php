<?php

Git::$repositories['slate-cbl-admin'] = [
    'remote' => 'git@github.com:SlateFoundation/slate-cbl-admin.git',
    'originBranch' => 'master',
    'workingBranch' => 'master',
    'trees' => [
        'php-config/Git.config.d/slate-cbl-admin.php',
        'php-config/SlateAdmin/WebApp.config.d/slate-cbl-admin.php',
        'sencha-workspace/packages/slate-cbl-admin'
    ]
];
