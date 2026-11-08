## Ringkasan

Jelaskan perubahan dan alasan bisnis/teknisnya secara singkat. Ikuti template lokal repository jika tersedia; template organisasi ini hanya fallback.

## Traceability

- Governing issue: # (gunakan tautan lengkap owner/repo#number untuk lintas repository)
- Governance / dependency reference (jika relevan):

Issue type, parent/child relationships, GitHub Project membership, Status, Priority, Story Points, Sprint, Milestone, assignee, reviewers, labels dan Development links dikelola melalui field **GitHub-native**, bukan diduplikasi dalam body PR. Jangan menggunakan `Closes #` untuk issue yang masih membutuhkan QA/UAT atau acceptance.

## Risk dan impact

- Security / privacy / data / cost / migration / breaking changes:
- Compatibility dan rollback/recovery (jika relevan):
- Rights, license atau publication implications (jika relevan):

## Validasi aktual

- Tests/checks yang **dijalankan** beserta hasil PASS/FAIL dan exact commit SHA:
- Checks yang **NOT RUN** atau SKIPPED, dengan alasan:
- CI run URL atau evidence reference yang sudah disanitasi:
- Pending QA/UAT/human acceptance:

Jangan menyebut source review sebagai executable test PASS. Jangan menyamakan merge ke review/holding dengan Full Admission, staging acceptance atau production readiness.

## Release impact

Jelaskan apakah perubahan memengaruhi release, versioning, deployment, atau tidak berlaku. Penetapan versi/release tetap mengikuti authority repository pemilik.

## Review checklist

- [ ] Diff sesuai governing issue dan tidak menduplikasi pekerjaan yang sudah merged.
- [ ] Dokumentasi dan compatibility diperbarui jika terdampak.
- [ ] Tidak ada secrets, internal endpoints, private evidence atau vulnerability detail yang dipublikasikan.
- [ ] Review, CI, dan acceptance mengikuti workflow repository pemilik.
