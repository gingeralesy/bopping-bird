(in-package #:rad-user)
(define-module #:bazaart
  (:use #:cl #:radiance #:r-clip))
(in-package #:bazaart)

;; Main site

;; (define-target-route ensure-main-route (() * *) (((bazaart) * *)))

(define-page index #@"bazaart/" (:lquery (template "index.ctml"))
  (setf lquery:*lquery-master-document*
        (plump:strip lquery:*lquery-master-document*)))

;; Content

(define-page user #@"bazaart/user/(.+)" (:uri-groups (user-id)))

(define-page shop #@"bazaart/shop/(.+)" (:uri-groups (shop-id)))
