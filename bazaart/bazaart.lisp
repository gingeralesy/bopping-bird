(in-package #:rad-user)
(define-module #:bazaart
  (:use #:cl #:radiance #:r-clip))
(in-package #:bazaart)

(define-page roller-page #@"/" (:lquery (template "index.ctml"))
  (setf lquery:*lquery-master-document*
        (plump:strip lquery:*lquery-master-document*)))

