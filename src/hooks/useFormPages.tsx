import React, { useState } from 'react';
import PersonalInfoPage from '../pages/PersonalInfoPage';
import TaxInformationPage from '../pages/TaxInformationPage';
import ManagementControlPage from '../pages/ManagementControlPage';
import BeneficialOwnershipPage from '../pages/BeneficialOwnershipPage';
import AuthorisedSignatoriesPage from '../pages/AuthorisedSignatoriesPage';
import DeclarationsPage from '../pages/DeclarationsPage';
import SignaturesPage from '../pages/SignaturesPage';
import ReviewSubmitPage from '../pages/ReviewSubmitPage';
import { useForm } from '../context/FormContext';

export default function useFormPages() {
  const { validateForm } = useForm();
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const pages = [
    { title: 'Personal & Entity Information', component: <PersonalInfoPage /> },
    { title: 'Tax Information', component: <TaxInformationPage /> },
    { title: 'Management Control', component: <ManagementControlPage /> },
    { title: 'Beneficial Ownership', component: <BeneficialOwnershipPage />},
    { title: 'Authorised Signatories', component: <AuthorisedSignatoriesPage /> },
    { title: 'Declarations', component: <DeclarationsPage /> },
    { title: 'Signatures', component: <SignaturesPage /> },
    { title: 'Review & Submit', component: <ReviewSubmitPage /> },
  ];

  const goToNextPage = () => {
    if (currentPageIndex < pages.length - 1) {
      // In a real implementation, we would validate the current page's data
      const isValid = validateForm();
      if (isValid || true) { // Temporarily always allowing progression for demo
        setCurrentPageIndex(currentPageIndex + 1);
      }
    }
  };

  const goToPrevPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  const renderCurrentPage = () => {
    return pages[currentPageIndex].component;
  };

  return {
    currentPage: currentPageIndex + 1,
    totalPages: pages.length,
    goToNextPage,
    goToPrevPage,
    isFirstPage: currentPageIndex === 0,
    isLastPage: currentPageIndex === pages.length - 1,
    renderCurrentPage,
  };
}