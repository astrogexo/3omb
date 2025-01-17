import { useCallback } from 'react';
import useTombFinance from './useTombFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useRedeemOnMasonry = (description?: string) => {
  const tombFinance = useTombFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleRedeem = useCallback(() => {
    const alertDesc = description || 'Redeem 3SHARE from Masonry';
    handleTransactionReceipt(tombFinance.exitFromMasonry(), alertDesc);
  }, [tombFinance, description, handleTransactionReceipt]);
  return { onRedeem: handleRedeem };
};

export default useRedeemOnMasonry;
