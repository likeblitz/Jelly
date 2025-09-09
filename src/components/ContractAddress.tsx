import React, { useState } from 'react';

const ContractAddress: React.FC = () => {
  const contractAddress = 'EmNFqmSi5DvwGjW57LJ7J5i8R6T155JrNf6GNFaupump';
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="bg-gray-900 border-2 border-yellow-400 rounded-lg p-4 max-w-md mx-auto lg:mx-0">
      <div className="text-center lg:text-left">
        <p className="font-pixel text-yellow-400 text-xs mb-2">CONTRACT ADDRESS</p>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <code className="font-mono text-yellow-300 text-xs break-all">
            {contractAddress}
          </code>
          <button
            onClick={copyToClipboard}
            className="font-pixel bg-yellow-400 text-black px-3 py-1 text-xs hover:bg-yellow-300 transition-colors whitespace-nowrap"
          >
            {copied ? 'COPIED!' : 'COPY'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContractAddress;