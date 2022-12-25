module.exports = {
   '*.{css,scss,md,html,json}': ['prettier --write .'],
   '*.{js,jsx}': ['prettier --write .'],
   '*.{ts,tsx}': [() => 'tsc --skipLibCheck --noEmit', 'eslint --cache --fix'],
};
